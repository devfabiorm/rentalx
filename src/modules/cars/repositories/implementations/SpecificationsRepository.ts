import { Repository } from "typeorm";

import dataSource from "../../../../database";
import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    const createdSpecification = this.repository.create(specification);

    await this.repository.save(createdSpecification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name });

    return specification;
  }
}

export { SpecificationsRepository };
