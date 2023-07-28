import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
const { v4: uuidv4 } = require('uuid')
import { Repository } from "typeorm";
import {  Information } from "./entity/info.entity";

@Injectable()
export class InfoService {
  constructor(@InjectRepository(Information) public readonly infoRepository: Repository<Information>) {}

  async userInformation(
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    profile: string,
  ): Promise<string> {
    const info = this.infoRepository.create({
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      profile: profile,
      address: address,
    });

    await this.infoRepository.save(info); // Use await here

    return `${info.firstName} ${info.lastName} ${info.email} you are successfully registered`;
  }
}
