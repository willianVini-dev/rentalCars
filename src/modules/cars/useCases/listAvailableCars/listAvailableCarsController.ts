import {Request,Response} from "express"
import {container} from "tsyringe"
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase"

class ListAvailableCarsController{

  async handle(request:Request, response:Response):Promise<Response>{

    const { brand, category_id, name} = request.query;
    const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase);
    console.log(name)
    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string, 
      category_id: category_id as string,
      name: name as string
    });

    return response.status(200).json(cars);
  }
  
}

export {ListAvailableCarsController}