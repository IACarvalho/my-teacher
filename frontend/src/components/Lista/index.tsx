import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import {
  Description,
  EmptyList,
  Informations,
  ListItem,
  Name,
  Photo,
  StyledList,
  Value,
} from "./Lista.style";

interface PropsList {
  teachers: Professor[];
}

const Lista = function (props: PropsList) {
  return (
    <StyledList>
      {props.teachers.length > 0 ? (
        props.teachers.map((teacher) => (
          <ListItem key={teacher.id}>
            <Photo src={teacher.photo} />
            <Informations>
              <Name>{teacher.name}</Name>
              <Value>
                {teacher.value_of_hour.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}{" "}
                por hora
              </Value>
              <Description>{teacher.description}</Description>
              <Button sx={{ width: "70%" }}>
                Marcar Aula Com {teacher.name}
              </Button>
            </Informations>
          </ListItem>
        ))
      ) : (
        <EmptyList>Nenum item encontrado</EmptyList>
      )}
    </StyledList>
  );
};

export { Lista };
