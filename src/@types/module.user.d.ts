declare namespace Module {
  declare namespace User {
    type Type = {
      id: number;
      uuid: string;
      login: string;
      nome: string;
      foto_perfil: string;

      grupos: Array<Groups>;
      clientes: Array<Clients>;

      token: string
    };

    type Groups = {
      id: 3;
      grupo: string;
      descricao: string;
      permissoes: Array<GroupPermissions>;
    };

    type GroupPermissions = {
      nome: string;
      descricao: string;
    };

    type Clients = {
      id: number;
      nome: string;
      monitoramento: boolean;
      energia: boolean;
      instalacoes: Array<ClientsInstallations>;
    };

    type ClientsInstallations = {
      id: number;
      nome: string;
      prefixo: string;
      energia: boolean;
    };
  }
}
