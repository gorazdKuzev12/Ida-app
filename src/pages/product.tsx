import styled from "styled-components";

const ProductFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: #f6f6f6;
  height: 100vh;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;
const FormTitle2 = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FormTitle3 = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FormTitle4 = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const ProductForm = () => {
  return (
    <ProductFormContainer>
      <FormTitle>Додај нов продукт</FormTitle>
      <FormTitle>Додај нов продукт</FormTitle>

      <StyledForm>
        <InputLabel>Име на продуктот:</InputLabel>
        <StyledInput type="text" placeholder="Име..." />

        <InputLabel>Опис:</InputLabel>
        <StyledTextarea rows={5} placeholder="Опис..." />

        <InputLabel>Категорија:</InputLabel>
        <StyledSelect>
          <option value="books">Книги</option>
          <option value="clothes">Облека</option>
          <option value="arts">Уметност и рачна работа</option>
          <option value="brands">Локални брендови</option>
        </StyledSelect>

        <InputLabel>Upload Product Image:</InputLabel>
        <StyledInput type="file" />
        <SubmitButton>Додади</SubmitButton>
      </StyledForm>
    </ProductFormContainer>
  );
};

export default ProductForm;
