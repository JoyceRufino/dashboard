// TableUI.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/Pagination";

type TableUIProps<T> = {
  headers: string[];
  data: T[];
  total?: number;
  currentPage?: number;
  itemsPerPage?: number;
  limit?: number;
  onPageChange?: (page: number) => void;
  renderRow: (row: T, index: number) => React.ReactNode; // << diferença principal
};

export function TableUI<T extends Record<string, any>>({
  headers,
  data,
  total,
  currentPage = 1,
  itemsPerPage,
  limit,
  onPageChange,
  renderRow,
}: TableUIProps<T>) {
  const totalRecords = total ?? data.length;
  const perPage = limit ?? itemsPerPage ?? data.length;
  const totalPages = Math.ceil(totalRecords / perPage);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = data.slice(start, end);

  return (
    <div className="space-y-2">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => renderRow(row, rowIndex))}
        </TableBody>
      </Table>

      <div className="text-sm text-gray-500">
        Mostrando {paginatedData.length} de {totalRecords} registros
      </div>

      {totalPages > 1 && onPageChange && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
