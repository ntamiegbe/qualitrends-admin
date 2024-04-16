"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Stats from "@/components/global/Stats";
import Icons from "@/components/icons";
import { cn, formatAmount } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const routes = [
    {
      name: "Sales",
      path: "/lease-and-sales/sales",
    },
    {
      name: "Invoice",
      path: "/lease-and-sales/invoice",
    },
  ];

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      search: "",
    },
  });

  const {
    formState: { errors },
    watch,
  } = methods;

  const stats = [
    {
      title: "Total Invoice Created",
      value: "8,000",
    },
    {
      title: "Total Invoice Value",
      value: formatAmount(+1500000000, "NGN"),
    },
    {
      title: "Total Customers",
      value: formatAmount(+100, "NGN"),
    },
    {
      title: "Total Oustanding",
      value: formatAmount(+10000, "NGN"),
    },
  ];

  return (
    <div>
      <div className="lg:flex lg:space-x-5 justify-between">
        <div>
          <h1 className="lg:text-2xl font-semibold">Leases & Sales</h1>
          <div className="text-sm lg:text-sm text-black-500 font-Roboto flex items-center space-x-3 mt-1">
            <Link href="/dashboard">Dashboard</Link>

            <span>
              <Icons.CaretIcon className="fill-black-900 transform -rotate-90" />
            </span>
            <span className="capitalize text-primary">Leases</span>
          </div>
          <div className="mt-6">
            <div className="col-span-2 space-y-6">
              <Stats stats={stats} leaseStats showMobileTitle={false} />
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-6 max-lg:mt-4">
          <div className="flex items-center space-x-5 lg:space-x-6">
            <FormProvider {...methods}>
              <form className="lg:!ml-0 flex-1">
                <div className="lg:w-[300px]">
                  <Input
                    name="search"
                    placeholder="Search"
                    paddingLeft="pl-11"
                    type="search"
                    left={
                      <div className="w-9 pl-3">
                        <Icons.SearchIcon />
                      </div>
                    }
                  />
                </div>
              </form>
            </FormProvider>
            <Button
              theme="plain"
              className="border text-black-500 max-lg:px-2.5 h-[42px] border-[#5A5A5A33] rounded"
            >
              <div className="flex items-center lg:space-x-2.5">
                <Icons.FilterIcon />
                <div className="max-lg:hidden">Filter</div>
                <Icons.CaretIcon className="fill-black-500 max-lg:hidden" />
              </div>
            </Button>
          </div>
          <div className="flex justify-between items-center lg:space-x-10 lg:justify-end">
            <Button className="w-[200px] max-lg:h-9">
              <div className="flex items-center space-x-3">
                <Icons.PlusIcon className="fill-white" />
                <div>Create Invoice</div>
              </div>
            </Button>
            <Button theme="outline" className="w-[200px] max-lg:h-9">
              <div className="flex items-center space-x-3">
                <Icons.PlusIcon className="fill-primary" />
                <div>Create letter</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <ul className="mt-7 mb-10 flex items-center space-x-4 border-b border-[#CBCFD3] py-2">
        {routes.map((route, index) => {
          return (
            <li key={index} className="relative max-lg:w-1/2">
              <Link
                className={cn(
                  "capitalize max-lg:text-sm transition-all text-black-500 lg:w-[200px] flex justify-center",
                  {
                    "font-semibold text-black-900": pathname.includes(
                      route.path
                    ),
                  }
                )}
                href={route.path}
              >
                {route.name}
              </Link>

              <div
                className={cn(
                  "absolute left-1/2 transition-width transform -translate-x-1/2 -bottom-2.5 h-[3px] w-0 bg-primary",
                  {
                    "opacity-0": !pathname.includes(route.path),
                    "w-2/4": pathname.includes(route.path),
                  }
                )}
              />
            </li>
          );
        })}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
