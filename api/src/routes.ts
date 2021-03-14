import { Router } from "express";

// import das classes dos controllers
import { UserController } from "./controllers/UserController";
import { ReminderController } from "./controllers/ReminderController";

const router = Router(); // usando as rotas do express

// instanciando classes
const userController = new UserController;
const reminderController = new ReminderController;

router.post("/register", userController.create); // registrar usuário
router.get("/login", userController.logIn); // verificar e logar conta do usuário

router.post("/remindme", reminderController.create); // criar um remindme

export { router }