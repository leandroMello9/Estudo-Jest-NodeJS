const request = require("supertest");
const app = require("../src/app");

describe("testing-server-routes", () => {
  it("Return ok true", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({
      ok: true,
    });
  });

  it("Create todo ask", async () => {
    const todoTest = {
      id: 1,
      title: "Teste super teste",
      description: "Hahahahhaha",
    };

    const { body } = await request(app).post("/todo").send(todoTest);
    expect(body).toEqual(todoTest);
  });
  it("Error create todo", async () => {
    const todoTest = {
      id: 1,
      title: "",
      description: "Hahahahhaha",
    };

    const { status } = await request(app).post("/todo").send(todoTest);
    expect(status).toBe(400);
  });
  it("Listen todos", async () => {
    const { body, status } = await request(app).get("/listen/todo");

    expect(status).toBe(200);
    expect(body).toEqual([
      {
        id: 1,
        title: "Teste super teste",
        description: "Hahahahhaha",
      },
    ]);
  });
});
