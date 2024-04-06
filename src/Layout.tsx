import { AppShell, Burger, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

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
        <p>Proyectos</p>
        <p>Estudiantes</p>
        <p>Recaudos</p>
      </Stack>


      </AppShell.Navbar>

      <AppShell.Main><Outlet></Outlet></AppShell.Main>
    </AppShell>
  );
}

export default Demo;
