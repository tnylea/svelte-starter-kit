import { Menubar as MenubarPrimitive } from "bits-ui";
import { cva } from 'class-variance-authority'
import Root from "./menubar.svelte";
import CheckboxItem from "./menubar-checkbox-item.svelte";
import Content from "./menubar-content.svelte";
import Item from "./menubar-item.svelte";
import GroupHeading from "./menubar-group-heading.svelte";
import RadioItem from "./menubar-radio-item.svelte";
import Separator from "./menubar-separator.svelte";
import Shortcut from "./menubar-shortcut.svelte";
import SubContent from "./menubar-sub-content.svelte";
import SubTrigger from "./menubar-sub-trigger.svelte";
import Trigger from "./menubar-trigger.svelte";

const Menu = MenubarPrimitive.Menu;
const Group = MenubarPrimitive.Group;
const Sub = MenubarPrimitive.Sub;
const RadioGroup = MenubarPrimitive.RadioGroup;

export {
	Root,
	CheckboxItem,
	Content,
	Item,
	GroupHeading,
	RadioItem,
	Separator,
	Shortcut,
	SubContent,
	SubTrigger,
	Trigger,
	Menu,
	Group,
	Sub,
	RadioGroup,
	//
	Root as Menubar,
	CheckboxItem as MenubarCheckboxItem,
	Content as MenubarContent,
	Item as MenubarItem,
	GroupHeading as MenubarGroupHeading,
	RadioItem as MenubarRadioItem,
	Separator as MenubarSeparator,
	Shortcut as MenubarShortcut,
	SubContent as MenubarSubContent,
	SubTrigger as MenubarSubTrigger,
	Trigger as MenubarTrigger,
	Menu as MenubarMenu,
	Group as MenubarGroup,
	Sub as MenubarSub,
	RadioGroup as MenubarRadioGroup,
};

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50',
)
