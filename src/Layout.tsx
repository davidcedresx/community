import { AppShell, Burger, NavLink as MantineNavLink, Stack, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFileDescription, IconUsers } from '@tabler/icons-react';
import { Outlet, NavLink as RouterNavLink } from 'react-router-dom';
import logo from "./assets/IUTCM.png"

function Demo() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header p={"md"}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Image src={logo} w={128} />
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Stack>

                    <RouterNavLink to="/" style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <MantineNavLink
                                c={isActive ? "blue" : "black"}
                                active={isActive}
                                label="Estudiantes"
                                leftSection={<IconUsers size="1rem" stroke={1.5} />}
                            />
                        )}
                    </RouterNavLink>

                    <RouterNavLink to="/files" style={{ textDecoration: "none" }}>
                        {({ isActive }) => (
                            <MantineNavLink
                                c={isActive ? "blue" : "black"}
                                active={isActive}
                                label="Files"
                                leftSection={<IconFileDescription size="1rem" stroke={1.5} />}
                            />
                        )}
                    </RouterNavLink>

                    {/* <NavLink
                        active
                        to="files"
                        component={Link}
                        label="Recaudos"
                        leftSection={<IconFileDescription size="1rem" stroke={1.5} />}
                    /> */}
                </Stack>

            </AppShell.Navbar>

            <AppShell.Main><Outlet></Outlet></AppShell.Main>
        </AppShell>
    );
}

export default Demo;
