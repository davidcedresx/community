import { Stack, Table, Title } from "@mantine/core";

const Students = () => {
    const elements = [
        { nombre: 'wilmari', semestre: 4, telefono: '0424-7350962', cedula: '12.797.814' },
        { nombre: 'wilmari', semestre: 4, telefono: '0424-7350962', cedula: '12.797.814' },
        { nombre: 'wilmari', semestre: 4, telefono: '0424-7350962', cedula: '12.797.814' },
        { nombre: 'wilmari', semestre: 5, telefono: '0424-7350962', cedula: '12.797.814' },
        { nombre: 'wilmari', semestre: 5, telefono: '0424-7350962', cedula: '12.797.814' },
    ];

    const rows = elements.map((element) => (
        <Table.Tr key={element.cedula}>
            <Table.Td>{element.nombre}</Table.Td>
            <Table.Td>{element.cedula}</Table.Td>
            <Table.Td>{element.telefono}</Table.Td>
            <Table.Td>{element.semestre}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Stack>
            <Title>Estudiantes</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Nombre</Table.Th>
                        <Table.Th>Cedula</Table.Th>
                        <Table.Th>Teléfono</Table.Th>
                        <Table.Th>Semestre</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Stack>
    );
};

export default Students;