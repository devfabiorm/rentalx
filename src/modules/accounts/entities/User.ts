import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  driver_license: string;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  created_at: Date;
}

export { User };
