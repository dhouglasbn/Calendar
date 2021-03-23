import { Router } from "express";

// import das classes dos controllers
import { UserController } from "./controllers/UserController";
import { ReminderController } from "./controllers/ReminderController";
import { EventController } from "./controllers/EventController";
import { ListController } from "./controllers/ListController";

const router = Router(); // usando as rotas do express

// instanciando classes
const userController = new UserController;
const reminderController = new ReminderController;
const eventController = new EventController;
const listController = new ListController; 

router.post("/register", userController.create); // registrar usuário
router.get("/login", userController.logIn); // verificar e logar conta do usuário

router.post("/remindme", reminderController.create); // criar um remindme
router.post("/create", eventController.create); // criar um evento

// router.put("/putreminder")
// router.put("/putevent")

// router.delete("/delreminder")
// router.delete("/delevent")

router.get("/list", listController.index); // coletando todos os events e reminders do meu user
router.get("/item") // coletar um unico item


export { router }