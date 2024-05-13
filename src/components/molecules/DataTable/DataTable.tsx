import React from 'react'
import { DataTable as DataTablePrime } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { Skeleton } from 'primereact/skeleton'
import styles from './styles.module.scss'

interface DataTableProps {
  data: any[];
  columns: any[];
  numberRows?: number;
  variant?: string;
  search?: string;
  searchStatus?: any; // Replace 'any' with the actual type of searchStatus
  headerFilters?: string;
  loading?: boolean;
  paginatorNone?: boolean;
  scrollable?: boolean;
  scrollHeight?: string;
  sortable?: boolean;
  selectionMode?: "multiple" | "single" | "radiobutton" | "checkbox" | null | undefined;
  selection?: any[]; // Replace 'any[]' with the actual type of selection
  onSelectionChange?: (e: any) => void; // Replace 'any' with the actual type of e
  onRowSelect?: (e: any) => void; // Replace 'any' with the actual type of e
  editMode?: string;
  editor?: any; // Replace 'any' with the actual type of editor
  onCellEditComplete?: (e: any) => void; // Replace 'any' with the actual type of e
  rowHeight?: string;
  className?: string;
  textAlign?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  data = [],
  columns = [],
  numberRows = 10,
  variant = 'primary',
  search = '',
  searchStatus,
  headerFilters = '',
  loading = false,
  paginatorNone = true,
  scrollable = true,
  scrollHeight = '550px',
  sortable = false,
  selectionMode,
  selection,
  onSelectionChange,
  onRowSelect,
  editMode,
  editor,
  onCellEditComplete,
  rowHeight = '50px',
  className = '',
}) => {

  const filters = {
    global: { value: search, matchMode: FilterMatchMode.CONTAINS },
    status: { value: searchStatus, matchMode: FilterMatchMode.EQUALS },
  }

  const loadingTemplate = () => {
    return <Skeleton />
  }

  const paginatorTemplate = () => {
    return loading
      ? undefined
      : {
        layout: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        CurrentPageReport: (options: any) => {
          return (
            <div className={styles.datatable_footer}>
              Mostrando{' '}
              <span className='fw-bold'>{options.first}</span>-
              <span className='fw-bold'>{options.last}</span> de{' '}
              <span className='fw-bold'>{options.totalRecords}</span> registros
            </div>
          );
        },
      }
  }

  return (
    <div className={`${styles.datatable} ${styles[variant]} ${className}`}>
      <DataTablePrime
        value={data}
        paginator={!paginatorNone}
        paginatorTemplate={!paginatorNone ? undefined : paginatorTemplate()}
        rows={numberRows}
        filters={filters}
        header={headerFilters}
        scrollable={scrollable}
        scrollHeight={scrollHeight}
        stripedRows
        loading={loading}
        emptyMessage='No se encontraron resultados'
        selection={selection}
        onSelectionChange={onSelectionChange}
        onRowSelect={onRowSelect}
        editMode={editMode}
      >
        {columns?.map((column) => (
          <Column
            key={column.id}
            field={column.field}
            header={column.header}
            body={loading ? loadingTemplate : column.body}
            editor={column.body ? '' : editor}
            onCellEditComplete={onCellEditComplete}
            sortable={sortable}
            className={styles.datatable_column}
            frozen={column.frozen}
            style={{
              width: column.w,
              minWidth: column.w,
              height: rowHeight,
              minHeight: rowHeight,
              textAlign: column.t,
            }}
          />
        ))}
      </DataTablePrime>
    </div>
  )
}

export default DataTable
