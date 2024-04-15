import { ObjectType, Field } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 150 })
  name: string;

  @Field()
  @Column({ length: 5 })
  code: string;

  @Field()
  @Column({ length: 150 })
  emoji: string;
}