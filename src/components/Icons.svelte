<script lang="ts">
  // Box model
  export let boxWidth: string
  export let boxHeight: string | number
  export let backgroundColor: string
  export let backgroundHover: string = ''
  export let borderRadius: string
  export let borderRadiusHover: string
  export let tooltip: string = ''

  // Icon model
  export let width: string | number = '16px'
  export let height: string | number = '16px'
  export let classList: string = ''
  export let iconValue: IIcon
  export let fills: string[] = []
  export let colorHover: string = ''
</script>

<div class="icon-box" style="--backgroundHover:{backgroundHover}; --backgroundColor:{backgroundColor}; --borderRadius:{borderRadius}; --borderRadiusHover:{borderRadiusHover}" 
style:width={boxWidth} style:height={boxHeight}>
  <svg style='--colorHover:{colorHover};'
  {width}
  {height}
  viewBox={iconValue.viewBox || '0 0 16 16'}
  fill={iconValue.fill || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  
  {#each iconValue.path as path, i}
    <path
      d={path.d}
      fill={fills[i] ?? path.fill}
    ></path>
  {/each}
  {#if tooltip}
    <div class="icon-box__tooltip">
      {tooltip}
    </div>
  {/if}
</svg>
</div>

<style lang="scss">
.icon-box {
  @apply relative p-1 cursor-pointer flex justify-center items-center transition-colors bg-[var(--backgroundColor)] hover:bg-[var(--backgroundHover)] mb-3 rounded-[var(--borderRadius)] hover:rounded-[var(--borderRadiusHover)];
  transition: .2s;
  &:hover &__tooltip {
    @apply block;
  }
  &__tooltip {
    @apply hidden absolute top-0 left-[140%] bg-black p-2 text-white rounded-md font-semibold transition-opacity;
    transition: .6s;
  }
}
.icon-box:hover svg path {
  @apply fill-[var(--colorHover)]
}
</style>
