import styles from './styles.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import iconDelete from '@/../public/images/icons/delete.svg'
import iconEdit from '@/../public/images/icons/editar.svg'
import Image from 'next/image'

interface ComponentProps {
  showButton?: boolean
  editButton?: boolean
  activateButton?: boolean
  deleteButton?: boolean
  onClickShow?: () => void
  onClickEdit?: () => void
  onClickActivate?: () => void
  onClickDelete?: () => void
  status?: any
  className?: string
}

export const DataTableActions: React.FC<ComponentProps> = ({
  showButton = false,
  editButton = false,
  activateButton = false,
  deleteButton = false,
  onClickShow = () => { },
  onClickEdit = () => { },
  onClickActivate = () => { },
  onClickDelete = () => { },
  status,
  className = ''
}) => {
  return (
    <div className={`${styles.datatable_actions} ${className}`}>
      {showButton &&
        <div>
          <Button
            type='button'
            onClick={onClickShow}
            tooltip='Ver'
            tooltipOptions={{ position: 'top' }}
            variant='button_actions'
            height='30px'
          >
            <Image src={''} alt='icon' />
          </Button>
        </div>}
      {editButton &&
        <div>
          <Button
            type='button'
            onClick={onClickEdit}
            tooltip='Editar'
            tooltipOptions={{ position: 'top' }}
            variant='button_actions'
            height='30px'
          >
            <Image src={iconEdit} alt='icon' />
          </Button>
        </div>}
      {activateButton &&
        <div>
          {/* <ToggleButton
            onIcon='i-activate'
            offIcon='i-activate'
            checked={status}
            onChange={onClickActivate}
            tooltip={status ? 'Inactivar' : 'Activar'}
            tooltipOptions={{ position: 'top' }}
            variant='primary'
            height='30px'
          /> */}
        </div>}
      {deleteButton &&
        <div>
          <Button
            type='button'
            onClick={onClickDelete}
            tooltip='Eliminar'
            tooltipOptions={{ position: 'top' }}
            variant='button_actions'
            height='30px'
          >
            <Image src={iconDelete} alt='icon' />
          </Button>
        </div>}
    </div>
  )
}
