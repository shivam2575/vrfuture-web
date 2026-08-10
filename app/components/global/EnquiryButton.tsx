import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EnquiryButton({ className }: { className?: string }) {
  return (
    <Button
      variant="brand"
      size="pill"
      className={className}
      render={<Link href="/contact" />}
    >
      Enquire Now
    </Button>
  );
}
