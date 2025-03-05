"use client";
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return pathname === "/contact-us" ? (
    children
  ) : (
    <MainLayout>{children}</MainLayout>
  );
}
