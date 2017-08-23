declare var RxQ: RxQStatic;

declare module 'rxq' {
    export = RxQ;
}

interface RxQStatic {

    qixVersion: string;
    version: string;

    connectEngine(config: any, temp: any): GlobalObservable;
    connectQRS(config: any, temp: any): GlobalObservable;
}

interface AppObservable {
    constructor(source: any, temp: any);

    /** 
     * Aborts any selection mode in an app.
     * @param {boolean} qAccept - Set this parameter to true to accept the selections before exiting the selection mode.
     */
    qAbortModal(qAccept: boolean): any;

    /** 
     * Adds an alternate state in the app.
     * @param {string} qStateName - Name of the alternate state.
     */
    qAddAlternateState(qStateName: string): any;

    /** 
     * Adds a field on the fly.
     * @param {string} qName - Name of the field.
     * @param {string} qExpr - Expression value.
     */
    qAddFieldFromExpression(qName: string, qExpr: string): any;

    qAppLayouts(): any;

    /** 
     * Applies a bookmark
     * @param {string} qId - Identifier of the bookmark.
     */
    qApplyBookmark(qId: string): any;

    /** 
     * Loads the last logical operation (if any).
     */
    qBack(): any;

    /** 
     * Returns the number of entries on the Back stack.
     */
    qBackCount(): any;

    /** 
     * Checks if a given expression is valid.
     * @param {string} qExpr - Expression to check.
     * @param {string[]} [qLabels] - List of labels.
     */
    qCheckExpression(qExpr: string, qLabels?: string[]): any;

    /**
     * Checks if:
     *  - a given expression is valid.
     *  - a number is correct according to the locale.
     * @param {string} qExpr - Expression to check.
     */
    qCheckNumberOrExpression(qExpr: string): any;

    /**
     * Checks the syntax of a script.
     */
    qCheckScriptSyntax(): any;

    /**
     * Clears all selections in all fields of the current app.
     * @param {boolean} [qLockedAlso] - Set this parameter to true to clear all selections including the locked fields.
     * @param {string} [qStateName] - Name of the alternate state.
     */
    qClearAll(qLockedAlso?: boolean, qStateName?: string): any;

    /**
     * Clears entirely the undo and redo buffer.
     */
    qClearUndoBuffer(): any;

    /**
     * Clones a bookmark.
     * @param {string} qId - Identifier of the object to clone.
     */
    qCloneBookmark(qId: string): any;

    /**
     * Clones a dimension
     * @param {string} qId - Identifier of the object to clone.
     */
    qCloneDimension(qId: string): any;

    /**
     * Clones a measure
     * @param {string} qId - Identifier of the object to clone.
     */
    qCloneMeasure(qId: string): any;

    /**
     * Clones any visualizations, sheets and stories.
     * @param {string} qId - Identifier of the object to clone.
     */
    qCloneObject(qId: string): any;

    /**
     * Commits the draft of an object that was previously created by invoking the CreateDraft method.
     * @param {string} qId - Identifier of the draft to commit.
     */
    qCommitDraft(qId: string): any;

    /**
     * Creates a bookmark.
     * @param {GenericBookmarkProperties} qProp - Information about the object.
     */
    qCreateBookmark(qProp: GenericBookmarkProperties): GenericBookmarkObservable;

    /**
     * Creates a connection. A connection indicates from which data source, the data should be taken.
     * @param {Connection} qConnection - Information about the connection.
     */
    qCreateConnection(qConnection: Connection): any;

    /**
     * Creates a master dimension.
     * @param {GenericDimensionProperties} qProp - Information about the properties.
     */
    qCreateDimension(qProp: GenericDimensionProperties): GenericDimensionObservable;

    /**
     * Creates a drafs of an object.
     * @param {String} qId - Identifier of the object to create a draft from.
     */
    qCreateDraft(qId: string): any;

    /**
     * Creates a master measure.
     * @param {GenericMeasureProperties} qProp - Information about the properties.
     */
    qCreateMeasure(qProp: GenericMeasureProperties): GenericMeasureObservable;

    /**
     * Creates a generic object at app level.
     * @param {GenericObjectProperties} qProp - Information about the object.
     */
    qCreateObject(qProp: GenericObjectProperties): GenericObjectObservable;

    /**
     * Creates a transient object.
     * @param {GenericObjectProperties} qProp - Information about the object.
     */
    qCreateSessionObject(qProp: GenericObjectProperties): GenericObjectObservable;

    qCreateSessionVariable(...args: any[]): GenericVariableObservable;

    qCreateVariable(...args: any[]): GenericVariableObservable;

    qCreateVariableEx(...args: any[]): any;

    qDeleteConnection(...args: any[]): any;

    qDestroyBookmark(...args: any[]): any;

    qDestroyDimension(...args: any[]): any;

    qDestroyDraft(...args: any[]): any;

    qDestroyMeasure(...args: any[]): any;

    qDestroyObject(...args: any[]): any;

    qDestroySessionObject(...args: any[]): any;

    qDestroySessionVariable(...args: any[]): any;

    qDestroyVariableById(...args: any[]): any;

    qDestroyVariableByName(...args: any[]): any;

    qDoReload(...args: any[]): any;

    qDoReloadEx(...args: any[]): any;

    qDoSave(...args: any[]): any;

    qEvaluate(...args: any[]): any;

    qEvaluateEx(...args: any[]): any;

    qFindMatchingFields(...args: any[]): any;

    qForward(...args: any[]): any;

    qForwardCount(...args: any[]): any;

    qGetAllInfos(...args: any[]): any;

    qGetAppLayout(...args: any[]): any;

    qGetAppProperties(...args: any[]): any;

    qGetAssociationScores(...args: any[]): any;

    qGetBookmark(...args: any[]): any;

    qGetConnection(...args: any[]): any;

    qGetConnections(...args: any[]): any;

    qGetContentLibraries(...args: any[]): any;

    qGetDatabaseInfo(...args: any[]): any;

    qGetDatabaseOwners(...args: any[]): any;

    qGetDatabaseTableFields(...args: any[]): any;

    qGetDatabaseTablePreview(...args: any[]): any;

    qGetDatabaseTables(...args: any[]): any;

    qGetDatabases(...args: any[]): any;

    qGetDimension(...args: any[]): any;

    qGetEmptyScript(...args: any[]): any;

    qGetFavoriteVariables(...args: any[]): any;

    qGetField(...args: any[]): any;

    qGetFieldDescription(...args: any[]): any;

    qGetFileTableFields(...args: any[]): any;

    qGetFileTablePreview(...args: any[]): any;

    qGetFileTables(...args: any[]): any;

    qGetFileTablesEx(...args: any[]): any;

    qGetFolderItemsForConnection(...args: any[]): any;

    qGetIncludeFileContent(...args: any[]): any;

    qGetLibraryContent(...args: any[]): any;

    qGetLocaleInfo(...args: any[]): any;

    qGetLooselyCoupledVector(...args: any[]): any;

    qGetMatchingFields(...args: any[]): any;

    qGetMeasure(...args: any[]): any;

    qGetMediaList(...args: any[]): any;

    qGetObject(...args: any[]): any;

    qGetScript(...args: any[]): any;

    qGetScriptBreakpoints(...args: any[]): any;

    qGetTableData(...args: any[]): any;

    qGetTablesAndKeys(...args: any[]): any;

    qGetTextMacros(...args: any[]): any;

    qGetVariable(...args: any[]): any;

    qGetVariableById(...args: any[]): any;

    qGetVariableByName(...args: any[]): any;

    qGetViewDlgSaveInfo(...args: any[]): any;

    qGuessFileType(...args: any[]): any;

    qLockAll(...args: any[]): any;

    qMigrateDerivedFields(...args: any[]): any;

    qMigrateVariables(...args: any[]): any;

    qModifyConnection(...args: any[]): any;

    qPublish(...args: any[]): any;

    qRedo(...args: any[]): any;

    qReduceData(...args: any[]): any;

    qRemoveAllData(...args: any[]): any;

    qRemoveAlternateState(...args: any[]): any;

    qRemoveVariable(...args: any[]): any;

    qResume(...args: any[]): any;

    qSaveObjects(...args: any[]): any;

    qScramble(...args: any[]): any;

    qSearchAssociations(...args: any[]): any;

    qSearchObjects(...args: any[]): any;

    qSearchResults(...args: any[]): any;

    qSearchSuggest(...args: any[]): any;

    qSelectAssociations(...args: any[]): any;

    qSendGenericCommandToCustomConnector(...args: any[]): any;

    qSetAppProperties(...args: any[]): any;

    qSetFavoriteVariables(...args: any[]): any;

    qSetFetchLimit(...args: any[]): any;

    qSetLooselyCoupledVector(...args: any[]): any;

    qSetScript(...args: any[]): any;

    qSetScriptBreakpoints(...args: any[]): any;

    qSetViewDlgSaveInfo(...args: any[]): any;

    qUnPublish(...args: any[]): any;

    qUndo(...args: any[]): any;

    qUnlockAll(...args: any[]): any;

}

interface FieldObservable {
    constructor(source: any, temp: any);

    qClear(...args: any[]): any;

    qClearAllButThis(...args: any[]): any;

    qGetAndMode(...args: any[]): any;

    qGetCardinal(...args: any[]): any;

    qGetNxProperties(...args: any[]): any;

    qLock(...args: any[]): any;

    qLowLevelSelect(...args: any[]): any;

    qProperties(): any;

    qSelect(...args: any[]): any;

    qSelectAll(...args: any[]): any;

    qSelectAlternative(...args: any[]): any;

    qSelectExcluded(...args: any[]): any;

    qSelectPossible(...args: any[]): any;

    qSelectValues(...args: any[]): any;

    qSetAndMode(...args: any[]): any;

    qSetNxProperties(...args: any[]): any;

    qToggleSelect(...args: any[]): any;

    qUnlock(...args: any[]): any;

}

interface GenericBookmarkObservable {
    constructor(source: any, temp: any);

    qApply(...args: any[]): any;

    qApplyPatches(...args: any[]): any;

    qGetFieldValues(...args: any[]): any;

    qGetInfo(...args: any[]): any;

    qGetLayout(...args: any[]): any;

    qGetProperties(...args: any[]): any;

    qLayouts(): any;

    qPublish(...args: any[]): any;

    qSetProperties(...args: any[]): any;

    qUnPublish(...args: any[]): any;

}

interface GenericDimensionObservable {
    constructor(source: any, temp: any);

    qApplyPatches(...args: any[]): any;

    qGetDimension(...args: any[]): any;

    qGetInfo(...args: any[]): any;

    qGetLayout(...args: any[]): any;

    qGetLinkedObjects(...args: any[]): any;

    qGetProperties(...args: any[]): any;

    qLayouts(): any;

    qPublish(...args: any[]): any;

    qSetProperties(...args: any[]): any;

    qUnPublish(...args: any[]): any;

}

interface GenericMeasureObservable {
    constructor(source: any, temp: any);

    qApplyPatches(...args: any[]): any;

    qGetInfo(...args: any[]): any;

    qGetLayout(...args: any[]): any;

    qGetLinkedObjects(...args: any[]): any;

    qGetMeasure(...args: any[]): any;

    qGetProperties(...args: any[]): any;

    qLayouts(): any;

    qPublish(...args: any[]): any;

    qSetProperties(...args: any[]): any;

    qUnPublish(...args: any[]): any;

}

interface GenericObjectObservable {
    constructor(source: any, temp: any);

    qAbortListObjectSearch(...args: any[]): any;

    qAcceptListObjectSearch(...args: any[]): any;

    qApplyPatches(...args: any[]): any;

    qBeginSelections(...args: any[]): any;

    qClearSelections(...args: any[]): any;

    qClearSoftPatches(...args: any[]): any;

    qCollapseLeft(...args: any[]): any;

    qCollapseTop(...args: any[]): any;

    qCopyFrom(...args: any[]): any;

    qCreateChild(...args: any[]): any;

    qDestroyAllChildren(...args: any[]): any;

    qDestroyChild(...args: any[]): any;

    qDrillUp(...args: any[]): any;

    qEmbedSnapshotObject(...args: any[]): any;

    qEndSelections(...args: any[]): any;

    qExpandLeft(...args: any[]): any;

    qExpandTop(...args: any[]): any;

    qExportData(...args: any[]): any;

    qGetChild(...args: any[]): any;

    qGetChildInfos(...args: any[]): any;

    qGetEffectiveProperties(...args: any[]): any;

    qGetFullPropertyTree(...args: any[]): any;

    qGetHyperCubeBinnedData(...args: any[]): any;

    qGetHyperCubeContinuousData(...args: any[]): any;

    qGetHyperCubeData(...args: any[]): any;

    qGetHyperCubePivotData(...args: any[]): any;

    qGetHyperCubeReducedData(...args: any[]): any;

    qGetHyperCubeStackData(...args: any[]): any;

    qGetInfo(...args: any[]): any;

    qGetLayout(...args: any[]): any;

    qGetLinkedObjects(...args: any[]): any;

    qGetListObjectData(...args: any[]): any;

    qGetProperties(...args: any[]): any;

    qGetSnapshotObject(...args: any[]): any;

    qLayouts(): any;

    qLock(...args: any[]): any;

    qMultiRangeSelectHyperCubeValues(...args: any[]): any;

    qPublish(...args: any[]): any;

    qRangeSelectHyperCubeValues(...args: any[]): any;

    qResetMadeSelections(...args: any[]): any;

    qSearchListObjectFor(...args: any[]): any;

    qSelectHyperCubeCells(...args: any[]): any;

    qSelectHyperCubeContinuousRange(...args: any[]): any;

    qSelectHyperCubeValues(...args: any[]): any;

    qSelectListObjectAll(...args: any[]): any;

    qSelectListObjectAlternative(...args: any[]): any;

    qSelectListObjectContinuousRange(...args: any[]): any;

    qSelectListObjectExcluded(...args: any[]): any;

    qSelectListObjectPossible(...args: any[]): any;

    qSelectListObjectValues(...args: any[]): any;

    qSelectPivotCells(...args: any[]): any;

    qSetChildArrayOrder(...args: any[]): any;

    qSetFullPropertyTree(...args: any[]): any;

    qSetProperties(...args: any[]): any;

    qUnPublish(...args: any[]): any;

    qUnlock(...args: any[]): any;

}

interface GenericVariableObservable {
    constructor(source: any, temp: any);

    qApplyPatches(...args: any[]): any;

    qGetInfo(...args: any[]): any;

    qGetLayout(...args: any[]): any;

    qGetProperties(...args: any[]): any;

    qLayouts(): any;

    qSetDualValue(...args: any[]): any;

    qSetNumValue(...args: any[]): any;

    qSetProperties(...args: any[]): any;

    qSetStringValue(...args: any[]): any;

}

interface GlobalObservable {
    constructor(source: any, temp: any);

    qAbortAll(...args: any[]): any;

    qAbortRequest(...args: any[]): any;

    qAllowCreateApp(...args: any[]): any;

    qCancelReload(...args: any[]): any;

    qCancelRequest(...args: any[]): any;

    qConfigureReload(...args: any[]): any;

    qCopyApp(...args: any[]): any;

    qCreateApp(...args: any[]): any;

    qCreateDocEx(...args: any[]): any;

    qCreateSessionApp(...args: any[]): any;

    qCreateSessionAppFromApp(...args: any[]): any;

    qDeleteApp(...args: any[]): any;

    qEngineVersion(...args: any[]): any;

    qExportApp(...args: any[]): any;

    qGetActiveDoc(...args: any[]): any;

    qGetAppEntry(...args: any[]): any;

    qGetAuthenticatedUser(...args: any[]): any;

    qGetBNF(...args: any[]): any;

    qGetConfiguration(...args: any[]): any;

    qGetCustomConnectors(...args: any[]): any;

    qGetDatabasesFromConnectionString(...args: any[]): any;

    qGetDefaultAppFolder(...args: any[]): any;

    qGetDocList(...args: any[]): any;

    qGetFolderItemsForPath(...args: any[]): any;

    qGetFunctions(...args: any[]): any;

    qGetInteract(...args: any[]): any;

    qGetLogicalDriveStrings(...args: any[]): any;

    qGetMyDocumentsFolder(...args: any[]): any;

    qGetOdbcDsns(...args: any[]): any;

    qGetOleDbProviders(...args: any[]): any;

    qGetProgress(...args: any[]): any;

    qGetStreamList(...args: any[]): any;

    qGetSupportedCodePages(...args: any[]): any;

    qGetUniqueID(...args: any[]): any;

    qImportApp(...args: any[]): any;

    qImportAppEx(...args: any[]): any;

    qInteractDone(...args: any[]): any;

    qIsDesktopMode(...args: any[]): any;

    qIsPersonalMode(...args: any[]): any;

    qIsValidConnectionString(...args: any[]): any;

    qOSName(...args: any[]): any;

    qOSVersion(...args: any[]): any;

    qOpenDoc(...args: any[]): any;

    qProductVersion(...args: any[]): any;

    qPublishApp(...args: any[]): any;

    qQTProduct(...args: any[]): any;

    qQvVersion(...args: any[]): any;

    qReloadExtensionList(...args: any[]): any;

    qReplaceAppFromID(...args: any[]): any;

    qShutdownProcess(...args: any[]): any;

    qUploadToContentService(...args: any[]): any;

}

interface VariableObservable {
    constructor(source: any, temp: any);

    qForceContent(...args: any[]): any;

    qGetContent(...args: any[]): any;

    qGetNxProperties(...args: any[]): any;

    qGetRawContent(...args: any[]): any;

    qProperties(): any;

    qSetContent(...args: any[]): any;

    qSetNxProperties(...args: any[]): any;

}

interface Connection {
    /**
     * Identifier of the connection.
     * Is generated by the engine and is unique.
     */
    qId: string;
    /**
     * Name of the connection.
     */
    qName: string;
    /**
     * One of:
     *  - ODBC CONNECT TO [<provider name>]
     *  - OLEDB CONNECT TO [<provider name>]
     *  - CUSTOM CONNECT TO [<provider name>]
     *  - "<local absolute or relative path,UNC path>"
     *  - "<URL>"
     * Connection string.
     */
    qConnectionString: string;
    /**
     * One of:
     *  - ODBC
     *  - OLEDB
     *  - <Name of the custom connection file>
     *  - folder
     *  - internet
     *  Type of the connection.
     */
    qType: string;
    /**
     * Name of the user who creates the connection.
     */
    qUserName: string;
    /**
     * Password of the user who creates the connection.
     */
    qPassword: string;
    /**
     * Creation date of the connection or last modification date of the connection.
     */
    qModifiedDate: string;
    /**
     * Information about the connection.
     */
    qMeta: NxMeta;
    /**
     * Select which user credentials to use to connect to the source.
     *  - LOG_ON_SERVICE_USER: Disables
     *  - LOG_ON_CURRENT_USER: Enables
     */
    qLogOn: 'LOG_ON_SERVICE_USER' | 'LOG_ON_CURRENT_USER';
}

interface VariableListDef {
    /**
     * Type of the list
     */
    qType?: string;
    /**
     * Shows the reserved variables if set to true.
     */
    qShowReserved?: boolean;
    /**
     * Shows the system variables if set to true.
     */
    qShowConfig?: boolean;
    /**
     * Data
     */
    qData?: JSON;
}

interface ListObjectDef {
    /**
     * Name of the alternate state.
     */
    qStateName?: string;
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
    /**
     * Refers to a dimension stored in the list object.
     * TODO
     */
    qDef?: null;
    /**
     * Defines the sorting by state.
     * TODO
     */
    qAutoSortByState?: null;
    /**
     * Defines the frequence mode.
     * TODO
     */
    qFrequencyMode?: any;
    /**
     * If set to true, alternative values are allowd in qData.
     */
    qShowAlternatives?: boolean;
    /**
     * Fetches an initial data set.
     * TODO
     */
    qInitialDataFetch?: any;
    /**
     * Lists the expression in the list object.
     * TODO
     */
    qExpressions?: any;

}

interface HyperCubeDef {
    /**
     * Name of the alternate state.
     */
    qStateName?: string;
    /**
     * Array of dimensions.
     * TODO
     */
    qDimensions?: any;
    /**
     * Array of measures.
     * TODO
     */
    qMeasures?: any;
    /**
     * Order the columns of the hypercube should be sorted.
     */
    qInterColumnSortOrder?: number[];
    /**
     * Removes zero values.
     */
    qSuppressZero?: boolean;
    /**
     * Removes missing values.
     */
    qSuppressMissing?: boolean;
    /**
     * Initial data set.
     * TODO
     */
    qInitialDataFetch?: any;
    /**
     * Defines the way the data are handled internally by the engine.
     * One of:
     *  - S for DATA_MODE_STRAIGHT
     *  - P for DATA_MODE_PIVOT
     *  - K for DATA_MODE_PIVOT_STACK
     */
    qMode?: 'S' | 'P' | 'K';
    /**
     * Number of left dimensions.
     */
    qNoOfLeftDims?: number;
    /**
     * If this property is set to true, the cells are always expanded. It implies that it is not possible to collapse any cells.
     */
    qAlwaysFullyExpanded?: boolean;
    /**
     * Maximum number of cells for an initial data fetch (set in qInitialDataFetch) when in stacked mode (qMode is K).
     */
    qMaxStackedCells?: number;
    /**
     * If this property is set to true, the missing symbols (if any) are replaced by 0 if the value is a numeric and by an empty string if the value is a string.
     */
    qPopulateMissing?: boolean;
    /**
     * If set to true, the total (if any) is shown on the first row.
     */
    qShowTotalsAbove?: boolean;
    /**
     * This property applies for pivot tables and allows to change the layout of the table.
     */
    qIndentMode?: boolean;
    /**
     * Specifies a calculation condition, which must be fulfilled for the hupercube to be (re)calculated.
     */
    qCalcCond?: string;
    /**
     * To enable the sorting by ascending or descending order in the values of a measure.
     * One of:
     *  - -1 for sorting descending
     *  - 0 for no sorting
     *  - 1 for sorting ascending
     */
    qSortbyYValue?: -1 | 0 | 1;
}

interface MeasureListDef {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data.
     */
    qData?: JSON;
}

interface FieldListDef {
    /**
     * Shows the system tables if set to true.
     */
    qShowSystem?: boolean;
    /**
     * Shows the hidden fields if set to true.
     */
    qShowHidden?: boolean;
    /**
     * Show the semantic fields if set to true.
     */
    qShowSemantic?: boolean;
    /**
     * Shows the tables and fields present in the data model viewer if set to true.
     */
    qShowSrcTables?: boolean;
    /**
     * Shows the fields defined on the fly if set to true.
     */
    qShowDefinitionOnly?: boolean;
    /**
     * Shows the fields and derived fields if set to true.
     */
    qShowDerivedFields?: boolean;
    /**
     * Shows the Direct Discovery measure fields if set to true.
     */
    qShowImplicit?: boolean;
}

interface DimensionListDef {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data.
     */
    qData?: JSON;
}

interface ChildListDef {
    /**
     * Data that you want to include in the child list definition.
     */
    qData: JSON;
}

interface BookmarkListDef {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data.
     */
    qData?: JSON;
}

interface AppObjectListDef {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data.
     */
    qData?: JSON;
}

interface AbstractGenericProperties {
    /**
     * Definition of the dynamic properties.
     */
    qVariableListDef?: VariableListDef;
    qValueExpression?: string;
    qUndoInfoDef?: any;
    qStringExpression?: string;
    qSelectionObjectDef?: any;
    qMediaListDef?: any;
    qListObjectDef?: ListObjectDef;
    qHyperCubeDef?: HyperCubeDef;
    qMeasureListDef?: MeasureListDef;
    qFieldListDef?: FieldListDef;
    qEmbeddedSnapshotDef?: any;
    qDimensionListDef?: DimensionListDef;
    qChildListDef?: ChildListDef;
    qBookmarkListDef?: BookmarkListDef;
    qAppObjectListDef?: AppObjectListDef;
}

interface GenericBookmarkProperties extends AbstractGenericProperties {
    /**
     * Information about the bookmark.
     */
    qInfo: NxInfo;
}

interface GenericDimensionProperties extends AbstractGenericProperties {
    /**
     * Identifier and type of the dimension.
     */
    qInfo: NxInfo;
    /**
     * Definition of the dimension.
     */
    qDim: NxLibraryDimensionDef;
}

interface GenericMeasureProperties extends AbstractGenericProperties {
    /**
     * Information about the measure.
     */
    qInfo: NxInfo;
    /**
     * Definition of the measure.
     */
    qDim: NxLibraryMeasureDef;
}

interface GenericObjectProperties extends AbstractGenericProperties {
    /**
    * Identifier and type of the object.
    */
    qInfo: NxInfo;
    /**
     * 	Should be set to create an object that is linked to another object.
     *  Enter the identifier of the linking object (i.e the object you want to link to).
     */
    qExtendsId: string;
}

interface NxInfo {
    /**
     * Identifier of the object.
     */
    qId?: string;
    /**
     * Type of the object.
     */
    qType: string;
}

interface NxLibraryDimensionDef {
    /**
     * Information about the grouping;
     */
    qGrouping: 'N' | 'H' | 'C';
    /**
     * Array of dimension names.
     */
    qFieldDefs: string[];
    /**
     * Array of dimension labels.
     */
    qFieldLabels: string[];
}

interface NxLibraryMeasureDef {
    /**
     * Label of the measure.
     */
    qLabel: string;
    /**
     * Definition of the measure.
     */
    qDef: string;
    /**
     * Used to define a cyclic group or drill-down group.
     */
    qGrouping: 'N' | 'H' | 'C';
    /**
     * Array of expressions.
     */
    qExpressions: string[];
    /**
     * Index to the active expression in a measure.
     */
    qActiveExpression: number;
}

interface NxMeta {
    /**
     * Name.
     */
    qName: string;
}
