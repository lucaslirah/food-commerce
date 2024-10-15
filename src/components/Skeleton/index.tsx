import { SkeletonElement } from './styles'

export interface SkeletonSnackProps{
  type: 'title' |'text' |'image' |'thumbnail'
}

export function Skeleton({type}: SkeletonSnackProps) {
  return <SkeletonElement type={type}/>
}
