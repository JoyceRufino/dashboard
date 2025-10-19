import { BreadcrumbLink } from "@/components/BreadcrumbLink";
import { TabComponente } from "@/components/TabComponente";
import { Student } from "@/types/student";
import { FileText, User } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import Geral from "./TabContents/Geral";
import Payment from "./TabContents/Payment";
import Document from "./TabContents/Document";

interface Props {
  student: Student;
}

const StudentDetail: React.FC<Props> = () => {
  const location = useLocation();
  const student = location.state?.student;

  return (
    <div>
      <div className=" mb-5">
        <BreadcrumbLink
          items={[
            { label: "Home", href: "/" },
            { label: "Alunos", href: "/students" },
            { label: `Detalhe do Aluno: ${student?.name}`, active: true },
          ]}
        />
      </div>
      <TabComponente defaultValue="info" lazy>
        <TabComponente.Tab
          value="info"
          title="Informações Gerais"
          icon={<User />}
        >
          <Geral student={student} />
        </TabComponente.Tab>

        <TabComponente.Tab
          value="payment"
          title="Pagamento"
          icon={<FileText />}
        >
          <Payment student={student} />
        </TabComponente.Tab>

        <TabComponente.Tab value="docs" title="Documentos" icon={<FileText />}>
          <Document student={student} />
        </TabComponente.Tab>
      </TabComponente>
    </div>
  );
};

export default StudentDetail;
