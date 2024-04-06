import { AppShell, Burger, NavLink as MantineNavLink, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFileDescription, IconUsers } from '@tabler/icons-react';
import { Link, Outlet, NavLink as RouterNavLink } from 'react-router-dom';

function Demo() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div>Logo</div>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Stack>

                    <RouterNavLink to="/">
                        {({ isActive }) => (
                            <MantineNavLink
                                td="none"
                                active={isActive}
                                label="Estudiantes"
                                leftSection={<IconUsers size="1rem" stroke={1.5} />}
                            />
                        )}
                    </RouterNavLink>

                    <RouterNavLink to="/files">
                        {({ isActive }) => (
                            <MantineNavLink
                                active={isActive}
                                label="Files"
                                leftSection={<IconUsers size="1rem" stroke={1.5} />}
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
