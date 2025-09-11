import Button from "../Button";

const UserArea = () => (
  <div className="flex items-center space-x-4">
    <Button href="#" className="text-slate-300 text-sm">
      Entrar
    </Button>
    <Button href="#" className="bg-blue-500 px-3 py-1 rounded-sm text-sm">
      Criar Conta
    </Button>
  </div>
);

export default UserArea;