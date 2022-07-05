import React from "react";
import Pagination from "../Pagination/Pagination";
import { Icon } from "@iconify/react";
import Scrollbars from "react-custom-scrollbars";
import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";
import { accessObjectProperty } from "../../utils/helperFunctions";
import classes from "./Table.module.css";

const Table = ({
  data,
  pagination,
  headers,
  uniqueIdSrc,
  onClick,
  isLoading,
  onPageChange,
  isScrollable,
  scrollHeight,
  className,
}) => {
  const getHeaders = () => {
    return headers.map(({ name, alignCenter }, index) => (
      <th key={index} className={alignCenter && classes.alignCenter}>
        {name}
      </th>
    ));
  };

  const getTableData = () => {
    return data.map((row) => (
      <tr
        key={accessObjectProperty(row, uniqueIdSrc)}
        className={onClick && classes.clickable}
        onClick={() => onClick && onClick(accessObjectProperty(row, uniqueIdSrc))}
      >
        {headers.map(({ formatter, bold, source, subtitle, icon, alignCenter }, index) => {
          let result = formatter
            ? formatter(accessObjectProperty(row, source))
            : accessObjectProperty(row, source);

          if (icon) {
            return (
              <td
                className={`${bold && classes.bold} ${classes.iconContainer} ${
                  alignCenter && classes.alignCenter
                }`}
                key={index}
              >
                <Icon
                  className={classes.icon}
                  icon={icon.formatter(accessObjectProperty(row, icon.source))}
                />
                <div>
                  {result}
                  {subtitle && (
                    <span className={classes.subtitle}>
                      {subtitle.formatter
                        ? subtitle.formatter(accessObjectProperty(row, subtitle.source))
                        : accessObjectProperty(row, subtitle.source)}
                    </span>
                  )}
                </div>
              </td>
            );
          }

          return (
            <td className={`${bold && classes.bold} ${alignCenter && classes.alignCenter}`} key={index}>
              {result}
              {subtitle ? (
                <span className={classes.subtitle}>
                  {subtitle.formatter
                    ? subtitle.formatter(accessObjectProperty(row, subtitle.source))
                    : accessObjectProperty(row, subtitle.source)}
                </span>
              ) : null}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    !isLoading && (
      <div className={classes.root}>
        <ConditionalWrapper
          condition={isScrollable}
          wrapper={(children) => (
            <Scrollbars style={scrollHeight ? { height: scrollHeight } : {}} autoHide>
              {children}
            </Scrollbars>
          )}
        >
          <table className={className}>
            <thead>
              <tr>{getHeaders()}</tr>
            </thead>
            <tbody>{getTableData()}</tbody>
          </table>
        </ConditionalWrapper>

        {pagination && (
          <div className={classes.bottom}>
            <p>
              Showing {pagination.startingPoint} to {pagination.endingPoint} of {pagination.totalElements}{" "}
              tickets
            </p>
            <Pagination
              initialPage={pagination.pageNumber}
              totalPages={pagination.totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    )
  );
};

export default Table;
