import AppLoader from "./Components/AppLoader/AppLoader";
import Backdrop from "./Components/Backdrop/Backdrop";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import ConditionalWrapper from "./Components/ConditionalWrapper/ConditionalWrapper";
import { TABLE_DEFAULT_RETURN_VALUE, TABLE_WILD_CARD_SRC } from "./utils/helpers";
import DragAndDrop from "./Components/DragAndDrop/DragAndDrop";
import Draggable from "./Components/Draggable/Draggable";
import Dropdown from "./Components/Dropdown/Dropdown";
import Input from "./Components/Input/Input";
import Modal from "./Components/Modal/Modal";
import SearchBar from "./Components/SearchBar/SearchBar";
import SidedrawerModal from "./Components/SidedrawerModal/SidedrawerModal";
import Switch from "./Components/Switch/Switch";
import Table from "./Components/Table/Table";
import Tabs from "./Components/Tabs/Tabs";
import TextArea from "./Components/TextArea/TextArea";
import ThemeProvider, { DEFAULT_THEME, useDarkMode } from "./Components/ThemeProvider/ThemeProvider";
import Timeline from "./Components/Timeline/Timeline";

const returnLibrary = () => ({
  AppLoader,
  Backdrop,
  Button,
  Card,
  ConditionalWrapper,
  DEFAULT_THEME,
  DragAndDrop,
  Draggable,
  Dropdown,
  Input,
  Modal,
  SearchBar,
  SidedrawerModal,
  Switch,
  Table,
  TABLE_DEFAULT_RETURN_VALUE,
  TABLE_WILD_CARD_SRC,
  Tabs,
  TextArea,
  ThemeProvider,
  useDarkMode,
  Timeline,
});

export default returnLibrary();
