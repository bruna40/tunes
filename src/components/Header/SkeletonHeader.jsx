import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function SkeletonHeader() {
    return (
        <div>
        <ul>
          <li>
            <Skeleton width={70} height={20} />
          </li>
          <li>
            <Skeleton width={70} height={20} />
          </li>
          <li>
            <Skeleton width={70} height={20} />
          </li>
          <li>
            <Skeleton width={70} height={20} />
          </li>
        </ul>
      </div>
    )
}