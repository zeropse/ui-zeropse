"use client";

import { parseAsString, useQueryState } from "nuqs";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
    history: "push",
  });

  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
    history: "push",
  });

  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-3 w-max px-6">
        <div className="relative flex items-center shrink-0">
          <IconSearch className="absolute left-3 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search sites..."
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value || null)}
            className="pl-9 pr-4 py-2 rounded-full border border-primary/20 bg-background text-sm text-primary placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all w-[180px] focus:w-[240px]"
          />
        </div>
        <div className="w-[1px] h-6 bg-border mx-1 shrink-0" />
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="bg-transparent h-auto p-0 gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 py-2 rounded-full font-medium transition-all text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm data-[state=inactive]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-primary data-[state=inactive]:hover:opacity-80"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
