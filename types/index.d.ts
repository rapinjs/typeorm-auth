export declare class User {
  login(
    email: string,
    password: string,
    override?: boolean
  ): string | boolean
  verify(token: string): Promise<boolean>
  getId(): number
  getFirstName(): string
  getMiddleName(): string
  getLastName(): string
  getEmail(): string
  getTelephone(): string
  getImage(): string
  getRoleType(): string
  isLogged(): boolean
}

declare module "rapin" {
    interface Context {
      user: User
    }
  }