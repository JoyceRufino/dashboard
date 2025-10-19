import React, { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItemProps {
  value: string;
  title: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

const TabItem: React.FC<TabItemProps> = ({ children }) => <>{children}</>;

interface TabComponenteProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  lazy?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}

export const TabComponente: React.FC<TabComponenteProps> & {
  Tab: React.FC<TabItemProps>;
} = ({
  children,
  className,
  defaultValue,
  value,
  onValueChange,
  lazy = false,
  triggerClassName,
  contentClassName,
}) => {
  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabItemProps>[];

  const tabsProps =
    value !== undefined && onValueChange
      ? { value, onValueChange }
      : { defaultValue: defaultValue ?? (tabs[0] && tabs[0].props.value) };

  return (
    <div className={cn("w-full", className)}>
      <Tabs {...(tabsProps as any)} className="w-full">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.props.value}
              value={tab.props.value}
              disabled={tab.props.disabled}
              className={cn(
                "flex items-center gap-2 text-sm rounded-md text-muted-foreground data-[state=active]:bg-secondary  data-[state=active]:text-white",
                triggerClassName
              )}
            >
              {tab.props.icon && (
                <span className="opacity-90 data-[state=active]:bg-secondary data-[state=active]:text-white">
                  {tab.props.icon}
                </span>
              )}
              <span>{tab.props.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.props.value}
            value={tab.props.value}
            className={cn("pt-4", contentClassName)}
            forceMount={!lazy}
          >
            {tab.props.children}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

TabComponente.Tab = TabItem;
