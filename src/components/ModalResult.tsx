import { answerAtom } from "@/store";
import { useAtomValue } from "jotai";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Paragraph } from "./ui/typography";
import htmr from "htmr";

export default function ModalResult() {
  const answer = useAtomValue(answerAtom);

  const results = answer.filter((item) => item.status === true).length * 10;
  const answeredQuestions = answer.filter((item) => item.answer.length);
  const totalTrue = answer.filter((item) => item.status === true);

  return (
    <div className="fixed top-0 backdrop-blur-sm w-full flex justify-center items-center min-h-svh">
      <div className="bg-white p-4 rounded-md drop-shadow-md flex justify-center items-center flex-col space-y-3">
        <div className="flex justify-center items-center space-x-3">
          <Info />
          <Paragraph className="font-bold text-lg">
            {results >= 70 && results <= 100
              ? `Selamat! Nilai kamu ${results}`
              : `Maaf, nilai kamu ${results}!`}
          </Paragraph>
        </div>
        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">No</TableHead>
              <TableHead className="font-bold">Jawabanmu</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {answer.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-bold">{item.id}</TableCell>
                <TableCell>{htmr(item.answer ? item.answer : "-")}</TableCell>
                <TableCell>{item.status ? "✅" : "❌"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center space-x-4 items-center">
          <Paragraph>Dijawab: {answeredQuestions.length}</Paragraph>
          <Paragraph>Jawaban benar: {totalTrue.length}</Paragraph>
          <Paragraph>
            Jawaban salah: {answer.length - totalTrue.length}
          </Paragraph>
        </div>
        <Button
          onClick={() => {
            localStorage.removeItem("preferences");
            window.location.replace("/");
          }}
          className="font-bold"
        >
          Kembali ke beranda
        </Button>
      </div>
    </div>
  );
}
