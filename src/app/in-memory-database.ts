import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService{
  createDb(){
    const categories = [
      {id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa"},
      {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"}
    ];

    return {categories}
  }
}
