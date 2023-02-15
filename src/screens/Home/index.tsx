import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/button";
import { InputTextComponent } from "../../components/Inputs/TextInput";
import { Screen } from "../../components/screen";
import { ButtonVariant } from "../../models/interfaces/global/enum/buttonVariant";
import {
  CameraIcon,
  Container,
  Footer,
  ProductInfos,
  Span,
  UserWellcome,
} from "./styles";
import * as Yup from "yup";
import { ErrorMessage } from "../../components/errorMessage";
import { api } from "../../services/axios/api";
import { Alert, Text } from "react-native";
import { useState } from "react";
import { IProduct } from "../../models/interfaces/global/models/product";
import { useAuth } from "../../hook/useAuth";
import { ModalComponent } from "../../components/modal";

interface ISearchItem {
  id: string;
}

const schema = Yup.object().shape({
  id: Yup.string().required("Preencha o código do produto!"),
});

export function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchItem>({
    resolver: yupResolver(schema),
  });

  const { userLogged } = useAuth();

  const [product, setProduct] = useState<IProduct>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleGetProduct({ id }: ISearchItem) {
    try {
      const product = await getProductById(id);
      setProduct(product);
      setIsModalOpen(true);
    } catch (error) {
      Alert.alert(
        "Nenhum produto encontrado.",
        "Você tem certeza que o código informado existe?"
      );
    }
  }

  async function getProductById(id: string) {
    try {
      const { data } = await api.get(`/product/byId?id=${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
  return (
    <Screen>
      <Container>
        <UserWellcome>
          Olá {`\n`}
          <Span>{userLogged?.name}</Span>
        </UserWellcome>

        <Footer>
          {errors.id?.message && <ErrorMessage message={errors.id.message} />}
          <Controller
            control={control}
            name="id"
            render={({ field: { value, onChange, onBlur } }) => (
              <InputTextComponent
                keyboardType="number-pad"
                placeholder="Código do produto"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <ButtonComponent
            variant={ButtonVariant.blank}
            icon={<CameraIcon name="barcode" size={24} />}
            margin="16px 0px"
          />
          <ButtonComponent
            title="Pesquisar"
            onPress={handleSubmit(handleGetProduct)}
          />
        </Footer>
      </Container>

      <ModalComponent
        title="Produto"
        modalVisible={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      >
        <ProductInfos>Produto: {product?.name}</ProductInfos>
        <ProductInfos>
          Valor: R$
          {product?.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ProductInfos>
      </ModalComponent>
    </Screen>
  );
}
