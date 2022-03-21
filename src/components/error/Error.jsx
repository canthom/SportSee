import React from 'react';
import StyledError from './Error.styled';

function Error() {
  return (
    <StyledError>
      Erreur ! L'identifiant n'a pas été trouvé dans la base de données.
    </StyledError>
  );
}

export default Error;
