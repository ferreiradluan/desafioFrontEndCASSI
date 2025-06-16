import { Button } from "@/components/ui/button"

export default function NipDataCard() {
  return (
    <div className="bg-[#f9f9f9] p-6 rounded-lg mb-6">
      <h2 className="text-lg font-semibold text-[#002d4b] mb-4">Dados do notificação</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-[#2d2d2d] mb-2">Beneficiário</h3>
          <p className="text-[#505251]">Leandro Henrique</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Data de abertura</h3>
        <p className="text-[#505251]">29/01/2022</p>
      </div>

      <div>
        <h3 className="font-semibold text-[#2d2d2d] mb-4">Reconhece o interlocutor?</h3>
        <div className="flex gap-3">
          <Button variant="outline" className="border-[#d9d9d9] text-[#2d2d2d] hover:bg-[#f9f9f9]">
            Não
          </Button>
          <Button className="bg-[#002d4b] hover:bg-[#135b9e] text-white">Sim</Button>
        </div>
      </div>
    </div>
  )
}
