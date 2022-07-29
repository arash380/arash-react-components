import PropTypes from "prop-types";
import React from "react";
import { Icon } from "@iconify/react";
// import Scrollbars from "react-custom-scrollbars";
// import ConditionalWrapper from "../ConditionalWrapper/ConditionalWrapper";
import { accessObjectProperty } from "../../utils/helpers";
import classes from "./Table.module.css";

const Table = ({
  data,
  schema,
  uniqueIdSrc,
  onRowClick,
  isLoading,
  isScrollable,
  scrollHeight,
  className,
}) => {
  const getHeaders = () => {
    return schema.map(({ name, alignCenter }, i) => (
      <th key={i} className={alignCenter && classes.alignCenter}>
        {name}
      </th>
    ));
  };

  const getFormattedData = () => {
    return data.map((row) => (
      <tr
        key={accessObjectProperty(row, uniqueIdSrc)}
        className={onRowClick && classes.clickable}
        onClick={() => onRowClick && onRowClick(accessObjectProperty(row, uniqueIdSrc))}
      >
        {schema.map(({ formatter, bold, source, subtitle, icon, alignCenter }, i) => {
          let result = formatter
            ? formatter(accessObjectProperty(row, source))
            : accessObjectProperty(row, source);

          return (
            <td
              className={`${bold && classes.bold} ${alignCenter && classes.alignCenter} ${
                icon && classes.iconContainer
              }`}
              key={i}
            >
              {icon && (
                <Icon
                  className={classes.icon}
                  icon={icon.formatter(accessObjectProperty(row, icon.source))}
                />
              )}
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
        })}
      </tr>
    ));
  };

  return (
    !isLoading && (
      // <ConditionalWrapper
      //   condition={isScrollable}
      //   wrapper={(children) => (
      //     <Scrollbars style={scrollHeight ? { height: scrollHeight } : {}} autoHide>
      //       {children}
      //     </Scrollbars>
      //   )}
      // >
      <table className={`${classes.root} ${className}`}>
        <thead>
          <tr>{getHeaders()}</tr>
        </thead>
        <tbody>{getFormattedData()}</tbody>
      </table>
      // </ConditionalWrapper>
    )
  );
};

Table.propTypes = {
  className: PropTypes.any,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  isScrollable: PropTypes.bool,
  onRowClick: PropTypes.func,
  schema: PropTypes.arrayOf(
    PropTypes.shape({
      alignCenter: PropTypes.bool,
      bold: PropTypes.bool,
      formatter: PropTypes.func,
      icon: PropTypes.shape({
        formatter: PropTypes.func,
        source: PropTypes.string,
      }),
      name: PropTypes.string,
      source: PropTypes.string,
      subtitle: PropTypes.shape({
        formatter: PropTypes.func,
        source: PropTypes.string,
      }),
    })
  ).isRequired,
  scrollHeight: PropTypes.string,
  uniqueIdSrc: PropTypes.string.isRequired,
};

export default Table;
