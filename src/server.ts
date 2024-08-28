import fs from "fs";
import fastify from "fastify";

const server = fastify({ logger: true });

const teams = JSON.parse(fs.readFileSync("src/data/teams.json", "utf-8"));
const drivers = JSON.parse(fs.readFileSync("src/data/drivers.json", "utf-8"));

server.get("/teams", async (request, response) => {
	response.type("application/json").code(200);
	return teams;
});

server.get("/drivers", async (request, response) => {
	response.type("application/json").code(200);
	return drivers;
});

server.get("/drivers/:id", async (request, response) => {
	const { id } = request.params as { id: string };
	const idAsNumber = parseInt(id);
	const driver = drivers.find((driver: { id: number }) => driver.id === idAsNumber);
	if (!driver) {
		response.type("application/json").code(404);
		return { message: "Driver not found" };
	}
	response.type("application/json").code(200);
	return driver;
});

const PORT = parseInt(process.env.PORT || "3000");

server.listen({ port: PORT }, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
	server.log.info(`Server listening at ${address}`);
});
