import Image from 'next/image'
import styles from './ActionsBody.module.scss'
import IconDelete from '@/../public/images/icons/delete.svg'
import iconEdit from '@/../public/images/icons/editar.svg'
import iconShow from '@/../public/images/icons/IconShow.svg'
import { useRouter } from 'next/navigation'
import Button from '../Button/Button/Button'

interface Icons {
  show: string;
  edit: string;
  delete: string;
}

interface ActionsBodyProps {
  id?: string;
  actionShow?: boolean;
  actionEdit?: boolean;
  actionActBtn?: boolean;
  actionDelete?: boolean;
  urlShow?: string;
  urlEdit?: string;
  onDelete?: (setBranchs: any, id: string) => void;
  rowDataActive?: boolean;
  setBranchs?: any;
  handleActive?: (setBranchs: any, id: string) => void;
  nameModal?: string;
  setOpenModal?: (value: boolean) => void;
  setOpenModalTitle?: (title: string) => void;
}

const ActionsBody: React.FC<ActionsBodyProps> = ({
  id,
  actionShow,
  actionEdit,
  actionActBtn,
  actionDelete,
  urlShow,
  urlEdit,
  onDelete,
  rowDataActive,
  setBranchs,
  handleActive,
  nameModal,
  setOpenModal,
  setOpenModalTitle,
}) => {

  const router = useRouter();

  const icons: Icons = {
    show: iconShow,
    edit: iconEdit,
    delete: IconDelete,
  };

  const renderButton = (
    action: keyof Icons,
    tooltipText: string,
    onClickHandler: () => void,
    variant: string,
    disabled: boolean
  ) => {
    return (
      disabled && (
        <Button
          type='button'
          // tooltip={tooltipText}
          // tooltipOptions={{ position: 'top' }}
          variant={variant}
          onClick={onClickHandler}
        >
          <Image src={icons[action]} alt={action} className={styles.uploadImg} />
        </Button>
      )
    );
  };

  const handleShow = (url: string, show: boolean) => {
    if (nameModal) {
      setOpenModal && setOpenModal(true);
      setOpenModalTitle && setOpenModalTitle(`${show ? 'Ver' : 'Editar'} ${nameModal}`);
    } else {
      router.push(url);
    }
  };

  return (
    <>
      <div className={styles.section_table_actions}>
        <div className={styles['cont-btn']}>
          {actionShow && renderButton('show', 'Ver', () => handleShow(urlShow || '', true), 'button_show', actionShow)}
          {actionEdit && renderButton('edit', 'Editar', () => handleShow(urlEdit || '', false), 'button_edit', actionEdit)}
          {actionActBtn && (
            <div
              className='custom-tooltip-btn'
              data-pr-tooltip={rowDataActive ? 'Inactivar' : 'Activar'}
              data-pr-position='top'
            >
              {/* <ToggleButton
                onIcon='i-activar'
                offIcon='i-activar'
                checked={rowDataActive}
                onChange={(e) => handleActive(setBranchs, id)}
                variant='primary'
                tooltip={rowDataActive ? 'Inactivar' : 'Activar'}
                tooltipOptions={{ position: 'top' }}
              /> */}
            </div>
          )}
          {actionDelete && renderButton(
            'delete',
            'Eliminar',
            () => onDelete && onDelete(setBranchs, id || ''),
            'button_delete',
            actionDelete
          )}
        </div>
      </div>
    </>
  );
};

export default ActionsBody;
