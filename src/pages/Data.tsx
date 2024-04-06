import { Grid, Stack, Text, Title } from "@mantine/core";
import { IconFileDescription, IconFileSpreadsheet, IconFileTypePdf } from "@tabler/icons-react";

const Data = () => {

    const folders = [
        { name: "Control de asistencia", type: "PDF" },
        { name: "Inscripción en SC", type: "EXCEL" },
        { name: "Carta de culminación", type: "WORD" },
    ];

    return (
        <Stack>
            <Title>Recaudos</Title>
            <Grid>
                {folders.map((folder) => (
                    <Grid.Col span={4} w={80} h={80}>
                        <Stack p="lg" align="center" style={{
                            border: "1px black solid"
                        }}>
                            {folder.type === "PDF" && <IconFileTypePdf width={64} height={64} />}
                            {folder.type === "EXCEL" && <IconFileSpreadsheet width={64} height={64} />}
                            {folder.type === "WORD" && <IconFileDescription width={64} height={64} />}
                            <Text>{folder.name}</Text>
                        </Stack>
                    </Grid.Col>
                ))}
            </Grid>
        </Stack>
    );
}

export default Data;