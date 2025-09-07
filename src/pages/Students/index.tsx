import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TableUI } from "@/components/TableUI";
import { SearchInput } from "@/components/SearchInput";
import { useForm } from "react-hook-form";
import { ModalSteps } from "@/components/ModalSteps";
import { getStudentSteps } from "./AddStudentSteps";
import { CirclePlus } from "lucide-react";

export interface Student {
  name: string;
  status: "Ativo" | "Inativo";
  date: string;
}

export const initialStudents: Student[] = [
  { name: "Joyce Rufino", status: "Ativo", date: "2025-09-01" },
  { name: "Maria Silva", status: "Inativo", date: "2025-09-02" },
  { name: "Carlos Santos", status: "Ativo", date: "2025-09-03" },
  { name: "Lucas Oliveira", status: "Ativo", date: "2025-09-04" },
  { name: "Ana Paula", status: "Inativo", date: "2025-09-05" },
  { name: "Fernanda Costa", status: "Ativo", date: "2025-09-06" },
  { name: "Rafael Lima", status: "Ativo", date: "2025-09-07" },
  { name: "Beatriz Souza", status: "Inativo", date: "2025-09-08" },
  { name: "Gustavo Martins", status: "Ativo", date: "2025-09-09" },
  { name: "Juliana Rocha", status: "Ativo", date: "2025-09-10" },
  { name: "Marcos Silva", status: "Ativo", date: "2025-09-11" },
  { name: "Patrícia Lima", status: "Inativo", date: "2025-09-12" },
  { name: "Roberto Santos", status: "Ativo", date: "2025-09-13" },
  { name: "Camila Costa", status: "Ativo", date: "2025-09-14" },
  { name: "Diego Almeida", status: "Ativo", date: "2025-09-15" },
  { name: "Larissa Fernandes", status: "Inativo", date: "2025-09-16" },
  { name: "Felipe Ribeiro", status: "Ativo", date: "2025-09-17" },
  { name: "Vanessa Melo", status: "Ativo", date: "2025-09-18" },
];

const Students = () => {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const { control, handleSubmit, ...methods } = useForm();

  const itemsPerPage = 5;

  const headerTable = ["name", "status", "date"];

  const filteredStudents = initialStudents.filter((student: Student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDate = dateFilter ? student.date === dateFilter : true;
    return matchesSearch && matchesDate;
  });

  const steps = getStudentSteps({ control });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Buscar aluno"
        />
        <Button variant="default" onClick={() => setOpen(true)}>
          <CirclePlus />
          Cadastrar Aluno
        </Button>
      </div>

      <TableUI
        headers={headerTable}
        limit={10}
        data={filteredStudents}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        total={filteredStudents.length}
        renderCell={(key, value) => {
          if (key === "status") {
            return (
              <Badge variant={value === "Ativo" ? "default" : "destructive"}>
                {value}
              </Badge>
            );
          }
          return value;
        }}
      />

      <ModalSteps
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        title="Cadastrar Aluno"
        description="Preencha os dados do aluno"
        onSubmit={handleSubmit((data) => {
          console.log("Aluno cadastrado:", data);
          setOpen(false);
        })}
        onSaveDraft={handleSubmit((data) => {
          console.log("Rascunho salvo:", data);
          setOpen(false);
        })}
        size={"2xl"}
      />
    </div>
  );
};

export default Students;
