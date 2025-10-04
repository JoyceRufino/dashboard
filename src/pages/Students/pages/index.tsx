import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TableUI } from "@/components/TableUI";
import { SearchInput } from "@/components/SearchInput";
import { useForm } from "react-hook-form";
import { ModalSteps } from "@/components/ModalSteps";
import { getStudentSteps } from "../AddStudentSteps";
import { ChevronLeft, CirclePlus, Delete, Edit, Trash2 } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { initialStudents } from "../mockdata";
import { Student } from "@/types/student";
import { Modal } from "@/components/Modal";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes";
import { navigateWithParams } from "@/utils/navigateWithParams";

const Students = () => {
  const navigate = useNavigate();
  const { control, setValue, handleSubmit } = useForm();
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const itemsPerPage = 5;

  const labels = [
    "Nome",
    "CPF",
    "Status Cadastro",
    "Status Financeiro",
    "Data de Criação do Usuário",
    "",
  ];

  const filteredStudents = initialStudents.filter((student: Student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDate = dateFilter ? student.date === dateFilter : true;
    return matchesSearch && matchesDate;
  });

  const steps = getStudentSteps({ control, setValue });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Buscar aluno"
        />
        <Button variant="default" onClick={() => setOpen(true)}>
          <CirclePlus className="mr-2" />
          Cadastrar Aluno
        </Button>
      </div>

      <TableUI
        headers={labels}
        data={filteredStudents}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        total={filteredStudents.length}
        renderRow={(student, index) => (
          <TableRow key={index}>
            <TableCell className=" hover:text-secondary hover:underline cursor-pointer">
              <a
                onClick={() =>
                  navigateWithParams(navigate, paths.studentDetail, {
                    uuid_student: student.uuid_student,
                  })
                }
              >
                {student.name}
              </a>
            </TableCell>
            <TableCell>{student.cpf}</TableCell>
            <TableCell>
              <Badge
                variant={
                  student.statusFinancial === "Em dia" ? "sucess" : "secondary"
                }
              >
                {student.statusFinancial}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  student.statusRegistration === "Ativo"
                    ? "default"
                    : "destructive"
                }
              >
                {student.statusRegistration}
              </Badge>
            </TableCell>

            <TableCell>{student.date}</TableCell>
            <TableCell className="flex justify-end gap-3 items-center ">
              <div className="flex gap-5 pr-7">
                <button
                  onClick={() => setOpen(true)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => setOpenDelete(true)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </TableCell>
          </TableRow>
        )}
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

      <Modal
        open={openDelete}
        title="Tem certeza que deseja deletar?"
        onClose={() => setOpenDelete(false)}
        onSubmit={() => {}}
        submitLabel="Confirmar"
      >
        <div className="space-y-4">
          <p>Confirmar deletar o aluno:</p>
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-lg shadow-sm">
            <ChevronLeft />
            <span>Ação irreversível!</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Students;
