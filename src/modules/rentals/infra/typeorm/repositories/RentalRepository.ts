import { ICreateRental, IRentalsRepository } from "../../../repositories/IRentalsRepositorys";
import { Rental } from "../entities/rental";
import { Repository, getRepository } from 'typeorm';


class RentalRepository implements IRentalsRepository{

  private repository:Repository<Rental>
  constructor(){
    this.repository = getRepository(Rental)
  }

  async findByOpenRentalUser(user_id: string): Promise<Rental> {
    return await this.repository.findOne({user_id})
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return await this.repository.findOne({car_id})
  }
  async create({car_id, expected_return_date, user_id}: ICreateRental): Promise<Rental> {
    const rental = await this.repository.create({car_id, expected_return_date, user_id})
    await this.repository.save(rental)
    return rental;
  }
  
}

export {RentalRepository}