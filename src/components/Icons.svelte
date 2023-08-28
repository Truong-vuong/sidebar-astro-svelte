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

<div class="icon-box group" style="--backgroundHover:{backgroundHover}; --backgroundColor:{backgroundColor}; --borderRadius:{borderRadius}; --borderRadiusHover:{borderRadiusHover}" 
style:width={boxWidth} style:height={boxHeight}>
  <svg style='--colorHover:{colorHover};'
  {width}
  {height}
  class={classList}
  stroke={iconValue.stroke}
  stroke-width={iconValue.strokeWidth}
  viewBox={iconValue.viewBox || '0 0 16 16'}
  fill={iconValue.fill || 'none'}
  xmlns="http://www.w3.org/2000/svg"
>
  {#if iconValue.g && !!Object.keys(iconValue.g).length}
    <g style={iconValue.g.style} transform={iconValue.g.transform} id={iconValue.g.id}>
      {#each iconValue.path as path}
        <path
          d={path.d}
          clip-rule={path.clipRule}
          fill-rule={path.fillRule}
          fill={path.fill}
          id={path.id}
          transform={path.transform}
          stroke={path.stroke}
          stroke-linecap={path.strokeLineCap}
          stroke-width={path.strokeWidth}
        ></path>
      {/each}
    </g>
  {:else}
    {#each iconValue.path as path, i}
      <path
        d={path.d}
        stroke={path.stroke}
        stroke-linecap={path.strokeLineCap}
        stroke-linejoin={path.strokeLineJoin}
        stroke-width={path.strokeWidth}
        clip-rule={path.clipRule}
        fill-rule={path.fillRule}
        fill={fills[i] ?? path.fill}
      ></path>
    {/each}
  {/if}
  {#if tooltip}
    <div class="icon-box__tooltip opacity-0 group-hover:opacity-100">
      {tooltip}
    </div>
  {/if}
</svg>
</div>

<style lang="scss">
.icon-box {
  @apply relative p-1 cursor-pointer flex justify-center items-center transition-colors bg-[var(--backgroundColor)] hover:bg-[var(--backgroundHover)] mb-3 rounded-[var(--borderRadius)] hover:rounded-[var(--borderRadiusHover)];
  transition: .2s;
  &__tooltip {
    @apply absolute top-0 left-[140%] bg-black p-2 text-white rounded-md font-semibold transition-opacity;
    transition: .6s;
  }
}
.icon-box:hover svg path {
  @apply fill-[var(--colorHover)]
}
</style>
