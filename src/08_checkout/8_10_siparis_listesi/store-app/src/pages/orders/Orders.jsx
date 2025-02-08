import {
  Alert,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import requests from "../../api/apiClient";
import Loading from "../../components/Loading";
import { currenyTRY } from "../../utils/formats";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    requests.orders
      .getOrders()
      .then((result) => setOrders(result))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  if (!orders || orders.length === 0) {
    return <Alert severity="warning">Henüz siparişiniz yok</Alert>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <Chip
                  label={item.orderStatus}
                  color="secondary"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{new Date(item.orderDate).toLocaleString()}</TableCell>
              <TableCell>{currenyTRY.format(item.total)}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
