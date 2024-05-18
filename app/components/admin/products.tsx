import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  NumberField,
  NumberInput
} from "react-admin";

const ProductFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const ProductList = (props: any) => (
  <List {...props} filters={<ProductFilter />}>
    <Datagrid>
    <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="image" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const ProductShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="image" />
      {/* <FileField source="file.src" title="file.title" /> */}
    </SimpleShowLayout>
  </Show>
);

export const ProductCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
      {/* <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput> */}
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TextInput source="title" />
      <TextInput source="price" />
      <TextInput source="image" />
      {/* <FileInput source="file" label="File" accept="application/pdf">
        <FileField source="src" title="title" />
      </FileInput> */}
    </SimpleForm>
  </Edit>
);