import React, { useState } from "react";
import { Pagination as MuiPagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../config/colors";

const Pagination = ({ initialPage, totalPages, onPageChange, className }) => {
  const [page, setPage] = useState(initialPage);

  const onChange = (event, newPage) => {
    if (newPage === page) return;
    setPage(newPage);
    onPageChange(newPage);
  };

  const useStyles = makeStyles(() => ({
    root: {
      "& li": {
        marginLeft: "3px",
      },
      "& .MuiPaginationItem-root": {
        backgroundColor: colors.tertiary,
        borderRadius: "5px",
        fontWeight: "600",
      },
      "& .Mui-selected": {
        backgroundColor: "#f57b20",
        color: colors.white,
      },
      "& .Mui-selected:hover": {
        backgroundColor: "#f57b20",
      },
      "& .MuiPaginationItem-ellipsis": {
        height: "32px",
      },
    },
  }));
  const paginationClasses = useStyles();

  return (
    <MuiPagination
      onChange={onChange}
      count={totalPages}
      page={page}
      className={className}
      classes={{ root: paginationClasses.root }}
    />
  );
};

export default Pagination;
