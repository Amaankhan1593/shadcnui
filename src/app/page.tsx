import { AccordionDemo } from "@/components/accordion-demo";
import { AlertDialogDemo } from "@/components/alert.demo";
import { CalendarDemo } from "@/components/calender";
import { CardDemo } from "@/components/carddemo";
import { CarouselDemo } from "@/components/carousaldemo";
import { CheckboxDemo } from "@/components/checkboxdemo";
import { ContextMenuDemo } from "@/components/contextdemo";
import { DataTableDemo } from "@/components/datademo";
import { DrawerDemo } from "@/components/drawerdemo";
import { DropdownMenuDemo } from "@/components/dropdowndemo";
import { InputOTPDemo } from "@/components/inputoptdemo";
import { MenubarDemo } from "@/components/menubardemo";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationMenuDemo } from "@/components/navigationdemo";
import { PopoverDemo } from "@/components/popoverdemo";
import { ScrollAreaDemo } from "@/components/scrolldemo";
import { SelectDemo } from "@/components/selectdemo";
import { SheetDemo } from "@/components/sheetsdemo";
import { SonnerDemo } from "@/components/sonnerdemo";
import { SwitchForm } from "@/components/switchdemo";
import { TableDemo } from "@/components/tabledemo";
import { TabsDemo } from "@/components/tabsdemo";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Navigation Menu */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Navigation Menu
            </h2>
            <NavigationMenuDemo />
          </div>

          {/* Menubar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Menubar
            </h2>
            <MenubarDemo />
          </div>

          {/* Dropdown */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Dropdown Menu
            </h2>
            <DropdownMenuDemo />
          </div>

          {/* Select */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Select</h2>
            <SelectDemo />
          </div>

          {/* Accordion */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Accordion
            </h2>
            <AccordionDemo />
          </div>

          {/* Alert Dialog */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Alert Dialog
            </h2>
            <AlertDialogDemo />
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Calendar
            </h2>
            <CalendarDemo />
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Data Table
            </h2>
            <DataTableDemo />
          </div>

          {/* Drawer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Drawer</h2>
            <DrawerDemo />
          </div>

          {/* Scroll Area */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Scroll Area
            </h2>
            <ScrollAreaDemo />
          </div>

          {/* Sheet */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Sheet</h2>
            <SheetDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Card</h2>
            <CardDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Carousel
            </h2>
            <CarouselDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Checkbox
            </h2>
            <CheckboxDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Context
            </h2>
            <ContextMenuDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Input OTP
            </h2>
            <InputOTPDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Popover
            </h2>
            <PopoverDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Sonner</h2>
            <SonnerDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Switch</h2>
            <SwitchForm />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Table</h2>
            <TableDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Tabs</h2>
            <TabsDemo />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Dark themes</h2>
            <ModeToggle/>
          </div>
        </div>
      </div>
    </>
  );
}
