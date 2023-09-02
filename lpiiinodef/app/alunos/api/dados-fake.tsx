import { resolve } from "path";

async function getFakeData() {
    let res = await fatch(
        'http://localhost:38000/employees'
    );
    await new Promise((resolve) => setTimeout(resolve, 2000))
}