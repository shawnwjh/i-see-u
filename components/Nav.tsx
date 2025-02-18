import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Link,
    Button,
    Tooltip,
  } from "@heroui/react";
  import { 
    LayoutDashboard,
    Video,
    ChartColumnIncreasing,
    Presentation,
  } from 'lucide-react';
import { useState, ReactNode } from "react";
import Image from "next/image";

function Item({ name, isSelected, onClick, children }: { name: string, isSelected: boolean, onClick?: () => void, children?:ReactNode }) {
    return (
        <NavbarItem isActive={isSelected}>
            <Link color={isSelected ? "primary" : "foreground"} aria-current="page" href="#" onPress={onClick}>
            <Tooltip content={name}>
                {children}
            </Tooltip>
            </Link>
        </NavbarItem>
    )
}

export default function Nav({ showComponent }) {

    const [active, setActive] = useState("dashboard");
    showComponent(active);

    return (
        <Navbar className="flex flex-col">
            <NavbarBrand>
                <Image
                    src="/smu.png"
                    width={56}
                    height={56}
                    alt="smu logo"
                />
                
                <p>I See U</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-20" justify="center">
                <Item
                    isSelected={active === "dashboard"}
                    name="Dashboard"
                    onClick={() => setActive("dashboard")}
                >
                    <LayoutDashboard />
                </Item>
                <Item
                    isSelected={active === "camera"}
                    name="Camera"
                    onClick={() => setActive("camera")}
                >
                    <Video />
                </Item>
                <Item
                    isSelected={active === "reports"}
                    name="Reports"
                    onClick={() => setActive("reports")}
                >
                    <ChartColumnIncreasing />
                </Item>
                <Item
                    isSelected={active == "rooms"}
                    name="Rooms"
                    onClick={() => setActive("rooms")}
                >
                    <Presentation />
                </Item>
            </NavbarContent>
            <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="boyang.jpg"
                />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">admin@smu.edu.sg</p>
                </DropdownItem>
                <DropdownItem key="account">Account</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}